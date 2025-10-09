import semver from "semver";
import pkg from "../package.json" with { type: "json" };

const PACKAGE_NAME = "kiritoapi";
const CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutos

/**
 * Busca a versão mais recente do pacote no npm registry.
 */
async function fetchLatestVersion(): Promise<string | null> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${PACKAGE_NAME}`);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json() as any;
    return data["dist-tags"]?.latest ?? null;
  } catch (err) {
    console.error("[update-checker] Falha ao buscar versão:", (err as Error).message);
    return null;
  }
}

/**
 * Verifica se há uma versão mais recente e avisa o usuário no console.
 */
export async function checkForUpdates(): Promise<void> {
  const currentVersion = pkg.version;
  const latestVersion = await fetchLatestVersion();
  if (!latestVersion) return;

  if (semver.gt(latestVersion, currentVersion)) {
    const orange = "\x1b[38;5;215m";
    const green = "\x1b[38;5;119m";
    const reset = "\x1b[0m";

    console.log(
      `${orange}Você está usando uma versão desatualizada da ${PACKAGE_NAME} (atual: ${currentVersion}).\n` +
        `Atualize para a versão mais recente com:${reset} ${green}npm i ${PACKAGE_NAME}@${latestVersion}${reset}\n`,
    );
  }
}

/**
 * Inicia o verificador automático de atualizações.
 */
export function startUpdateChecker(): void {
  checkForUpdates(); // Executa na inicialização
  setInterval(checkForUpdates, CHECK_INTERVAL_MS);
}

// Inicia automaticamente se for chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  startUpdateChecker();
}
