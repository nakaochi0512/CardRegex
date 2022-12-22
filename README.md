# CardRegex
先頭の桁数が00であれば00をsの小文字に変換する。
それ以外はjをujに変換して小文字にする。

## 設定方法<br>
1.プライマリ・サーバにログインする。<br>
2.本ファイルを下記ディレクトリに保存する。<br>
  D:\Applications\PaperCut MF\server\custom<br>
3.管理者Web画面にログインする.<br>
4.<デバイス>タブをクリックする。<br>
5.一覧より設定を行うデバイスを選択する。<br>
6.<設定エディタ(応用)>をクリックする。<br>
7.ext-device.card-no-converterを検索する。<br>
8.値に「javascript:custom/card.js」と入力する。<br>
　アスキーなどエンコードを行いたい場合はパイプで結んで登録する。<br>
  「ascii-enc| javascript:custom/card.js」<br>
9.「ext-device.card-no-regex」を検索する。<br>
　文字が入力されている場合、空白にする。<br>
