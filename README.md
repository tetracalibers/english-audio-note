# English Audio Note

ブラウザで音読練習ができるデジタル英語ノート。

## 使い方

src/contents配下に後述する記法で英文コンテンツを記載したmdxファイルを置くと、そのコンテンツの音読学習ページが作成されます。

著作権の関係上、contents配下は非公開です。以下に記載する方法で、コンテンツを追加してください。

### slug

各学習ページには、`/note/(src/contents以下のパス)`でアクセスできます。

例えば、`src/contents/sample.mdx`の内容は、`http://localhost:3000/note/sample`ページに反映されます。

#### 予約語（？）

`private`というフォルダ名は、URL上無視されます。

privateフォルダは非公開コンテンツをまとめるためのものとしており、ノート分類を表す単語ではないからです。

そのため、`src/contents/private/sample.mdx`の内容も、`http://localhost:3000/note/sample`ページに反映されます。

### frontmatter

`---`と`---`で囲まれた部分は、yaml形式で記述します。

- title
  - ページのタイトルとして表示される文字列
- sentence
  - 読み上げさせたい英文
    - 改行・空行はページでもそのまま表示されます。
    - 1行ごとにリピート再生機能が付与されます。

```
---
title: Sample
sentence: |
  She put the pen to paper 
  but she couldn't bring herself to actually write anything. 
  
  She just stared at the blank card and wondered 
  what words she could write that would help in even a small way. 
  
  She thought of a dozen ways to begin but none seemed to do justice to the situation. 
  
  There were no words that could help and she knew it.
---
```

![](doc/assets/sample-frontmatter.png)

#### sentence - 和訳の追加

sentenceの各行の末尾に`<ja>和訳</ja>`を追加することで、フレーズ英文の下に和訳を表示させることができます。

```
---
title: Sample
sentence: |
  She put the pen to paper <ja>彼女はペンを走らせた</ja>
  but she couldn't bring herself to actually write anything. <ja>が、実際に何かを書く気にはなれなかった</ja>
  
  She just stared at the blank card and wondered 
  what words she could write that would help in even a small way. 
  
  She thought of a dozen ways to begin but none seemed to do justice to the situation. <ja>何十通りもの方法を考えたが、どれもピンとこない。</ja>
  
  There were no words that could help and she knew it.
---
```

![](doc/assets/sample-frontmatter-sentence-ja.png)

## 追加予定の機能

- 速度調整
- スラッシュとかアクセントの位置とか書きこめる
  - それを見ながら音読練習
- 単語やフレーズの意味などのノートも兼ねる
- 日本語訳を隠す
- 全文再生