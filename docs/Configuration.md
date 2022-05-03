svelte.config.jsファイルの中の設定はすべてオプションです。

## kit
- [adapter](https://kit.svelte.dev/docs/adapters)
```
svelte-kit buildを用いる歳の設定?
つまりデプロイ前の設定?
デフォルトでは'@sveltejs/adopter-auto'をもちいるようになっている？（実際にsvelte-kitの初期ファイルでもそうなっている。）
例えばVercel二デプロイするときは'adapter-vercel'
```

- [amp](https://kit.svelte.dev/docs/seo#amp)

```
<AMP>
モバイル端末向けに最適化したWebページの読み込みを高速化できるフレームワーク。
AMPは、WebページのデータをGoogle側がキャッシュしてくれており、リクエストがあった場合に
そのデータをレスポンスするので高速化が実現されています。

svelteで実装する際はampをtrueにする。
ただし
- client-sideのjsやrtouterが無効になる
- styleは<style amp-custom>を介して関連付けられる。
```
- appDir
```
npm run buildした際、生成されるファイルのpathが示されている。
.svelte-kit/output/client/xxx/
defaultは_app

```
- browser

```
    browser: {
      hydrate: true,
      router: true
    },
    のようなオブジェクト

デフォルトでは、SvelteKitはまずサーバーでコンポーネントをレンダリングし、それをHTMLとしてクライアントに送信します。それからブラウザ上でコンポーネントをサイドレンダリングし、ハイドレーション(hydration) と呼ばれるプロセスでそれをインタラクティブにします。

通常、SvelteKit はサーバーでレンダリングされたHTMLをインタラクティブなページに ハイドレート(hydrates) します。JavaScriptを全く必要としないページ — 多くのブログ記事や 'about' ページがこのカテゴリに入ります

サーバーでレンダリングされたコンポーネントをクライアントに返し、ハイドレートすることでインタラクティブにするが、サーバーとの連結が必要でないページ（ブログ記事とか？）はhydrateをfalseにする。
```

- csp

参考

[mdn](https://developer.mozilla.org/ja/docs/Web/HTTP/CSP)
```
CSP の第一の目的は XSS 攻撃の軽減と報告です。
XSS 攻撃とは、サーバーから取得したコンテンツをブラウザーが信頼する性質を悪用した攻撃です。ブラウザーはコンテンツの送信元を信頼するため、たとえ実際の送信元が見かけ上とは異なっていたとしても、悪意あるスクリプトが被害者のブラウザー上で実行されてしまいます。

CSPを適応させるには該当するウェブページにてContent-Security-Policy HTTPヘッダーを返すようにし、その値にはユーザーに読み込ませたいリソースの情報を指定します。

   csp: {
      directives: {
        'script-src': ['self']
      }
こんな感じで書く。
```
    
- endpointExtensions

```
SvelteKit がエンドポイントとして扱うファイル拡張子の配列です。config.extensions と config.kit.endpointExtensions のどちらにも一致しない拡張子を持つファイルは、ルーターから無視されます。

svelteはバックエンドの機能も兼ねているからこの記述が必要なのですね。
```

- files

```
以下の string 値のうち、0 個以上を含むオブジェクトです:

assets — favicon.ico or manifest.json のような、何も処理する必要もなく、安定した URL を持つべき静的ファイルを配置する場所
hooks — hooks モジュールのロケーション(Hooks をご参照ください)
lib — コードベース全体から $lib でアクセスできる、アプリの内部ライブラリ
params — parameter matchers を含むディレクトリ
routes — アプリの構造を定義するファイル(ルーティング をご参照ください)
serviceWorker — Service Worker のエントリーポイントのロケーション(Service workers をご参照ください)
template — HTML レスポンス用テンプレートのロケーション

```

    floc
    inlineStyleThreshold
    methodOverride
    outDir
    package
    paths
    prerender
    route
    serviceWorker
    trainingSlash
    version
