import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsRoot = path.join(__dirname, '..', 'src', 'assets')

async function collectWebpFiles(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) await collectWebpFiles(full, out)
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webp')) out.push(full)
  }
  return out
}

const webpPaths = await collectWebpFiles(assetsRoot)

for (const webpPath of webpPaths) {
  const pngPath = webpPath.replace(/\.webp$/i, '.png')
  try {
    await fs.access(pngPath)
  } catch {
    await sharp(webpPath).png().toFile(pngPath)
    console.log('converted', path.relative(assetsRoot, webpPath), '->', path.relative(assetsRoot, pngPath))
  }
}
