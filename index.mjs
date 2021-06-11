import { join } from 'path'
import { promises as fs } from 'fs'
import mjml2html from 'mjml'
import Mustache from 'mustache'

const { mkdir, readFile, writeFile } = fs
const { render } = Mustache

const SRC_DIR = 'src'
const DIST_DIR = 'dist'

;(async () => {
  // MJMLファイルの読み込み
  const mjml = await readFile(join(SRC_DIR, 'index.mjml'), 'utf-8')

  // template を生成
  const { html: template } = mjml2html(mjml)

  // html を生成
  const html = render(template, { name: 'Higa' })

  // html を表示
  console.log(html)

  // 確認用に出力
  await mkdir(DIST_DIR).catch(() => false)
  await writeFile(join(DIST_DIR, 'index.html'), html)
})()
