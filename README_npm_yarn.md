# npm install / npm add / yarn install / yarn add の違い

- **npm install**
  - `package.json` の依存をすべてインストールする（`node_modules` を作る）。
  - 例: `npm install`
  - 個別パッケージ追加も可能（旧式）: `npm install express`

- **npm add**
  - npm v7以降で追加されたコマンド。`npm install` と同じくパッケージ追加。
  - 例: `npm add express`
  - `npm install express` と同じ意味。

- **yarn install**
  - `package.json` の依存をすべてインストールする（`node_modules` を作る）。
  - 例: `yarn install`
  - `npm install` と同じ意味。

- **yarn add**
  - パッケージを新たに追加し、`package.json` に追記する。
  - 例: `yarn add express`
  - `npm install express` や `npm add express` と同じ意味。

## まとめ

| コマンド           | 依存一括インストール | パッケージ追加 |
|--------------------|---------------------|----------------|
| npm install        | ○                   | ○              |
| npm add            | ○                   | ○              |
| yarn install       | ○                   | ×              |
| yarn add           | ×                   | ○              |

- `install` は「依存を全部入れる」
- `add` は「新しい依存を追加する」
