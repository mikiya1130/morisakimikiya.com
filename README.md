## export

### 手動

※通常は GitHub Actions でデプロイ

```bash
yarn build
```

`out` ディレクトリに出力される

### 除外ファイル

※別途アップロード

- /public/env
- /public/library

## composer

```bash
(local)
cd /path/to/morisakimikiya.com/public/lib
docker pull composer
docker run --rm -it -v $PWD:/app composer install
```
