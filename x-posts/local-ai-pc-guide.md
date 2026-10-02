# X投稿案：ローカルAIに必要なPCスペック（実測つき記事の紹介）

添付画像：記事トップの実測画像 https://norraoffice.com/local-ai-test.png（1280×720・16:9でXにそのまま合う）
記事URL（リプライに貼る）：
https://norraoffice.com/local-ai-pc-guide?utm_source=x&utm_medium=social&utm_campaign=local_ai_pc

※測定機はMacBookPro15,1（Core i7-8750H）＝2018年モデル。「6年前」ではなく「2018年の」「8年前の」と書く。

---

## 案A：意外性型（本命）

本文：
```
2018年のIntel Macで、ローカルAIを動かしてみた。

日本語のメモ整理（担当・期限・未定事項）
→ 回答完了まで約7.5秒、4問中4点

GPUなし・CPUだけ。モデルはQwen2.5 3B。
「ローカルAI＝高いPCが必要」とは限らなかった。
#ローカルAI
```

リプライ：
```
メモリ8GB/16GB/32GBで試すモデルの目安と、測定条件・全回答はこちら。
https://norraoffice.com/local-ai-pc-guide?utm_source=x&utm_medium=social&utm_campaign=local_ai_pc&utm_content=a
```

## 案B：買う前に止める型（PC購入を迷う人向け）

本文：
```
ローカルAIのためにPCを買い替える前に。

・メモリ8GB → 1〜4B級から
・16GB → 7〜9B級（4bit）から
・32GB以上 → 14B級も候補

古いIntel Mac（CPUのみ）でも3Bなら約7.5秒で日本語を整理できました。
まず手持ちで試すのが一番安い。
#ローカルLLM
```

リプライ：
```
試し方・日本語テストの入力例・買い替えの判断基準をまとめました。
https://norraoffice.com/local-ai-pc-guide?utm_source=x&utm_medium=social&utm_campaign=local_ai_pc&utm_content=b
```

## 案C：ハマりどころ共有型（詳しい層向け・返信がつきやすい）

本文：
```
Ollamaでqwen3:4bに think:false を渡しても、思考が止まらず出力上限まで走った。

/api/show で見ると thinking の値が [true] のみ。
モデル側が許可していないと切れないらしい。

結局Qwen2.5 3Bに替えて、日本語メモ整理は約7.5秒で完了。
同じ症状の人いますか？
#Ollama
```

リプライ：
```
測定条件と再現用JSON、Intel Macでの全結果はこちら。
https://norraoffice.com/local-ai-pc-guide?utm_source=x&utm_medium=social&utm_campaign=local_ai_pc&utm_content=c
```

---

## スレッドにする場合（案A＋補足）
1. 案Aの本文（画像つき）
2. 「初回はモデル読み込みで約16.6秒。2回目以降は回答の出始めまで0.12秒」
3. 「メモリはOllama全体でピーク約2.2GB。8GBのPCでも3B級は試す候補」
4. 記事リンク

## 出し方
- 画像は本文の投稿に付け、リンクはリプライに置く
- 案A → 2日後に案B → 余裕があれば案C、と分けて出し、反応の良い型を残す
- 案Cは技術者が多く見るので、平日の夜20〜22時が狙い目
- 「ローカルLLM」「Ollama 遅い」などで困っている人の投稿に、実測の数字で答える返信も効果的
