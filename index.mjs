import { join } from 'path'
import { promises as fs } from 'fs'
import mjml2html from 'mjml'

const { mkdir, readFile, writeFile } = fs

const SRC_DIR = 'src'
const DIST_DIR = 'dist'

;(async () => {
  // MJMLファイルの読み込み
  const mjml = await readFile(join(SRC_DIR, 'index.mjml'), 'utf-8')

  // html を生成
  const { html } = mjml2html(mjml)

  // html を表示
  console.log(html)

  // 確認用に出力
  await mkdir(DIST_DIR).catch(() => false)
  await writeFile(join(DIST_DIR, 'index.html'), html)
})()
