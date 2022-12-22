# CardRegex
先頭の桁数が00であれば00をsの小文字に変換する。
それ以外はjをujに変換して小文字にする。

##設定方法<br>
1.プライマリ・サーバにログインする。
2.本ファイルを下記ディレクトリに保存する。
  D:\Applications\PaperCut MF\server\custom
3.管理者Web画面にログインする.
4.<デバイス>タブをクリックする。
5.一覧より設定を行うデバイスを選択する。
6.<設定エディタ(応用)>をクリックする。
7.ext-device.card-no-converterを検索する。
8.値に「javascript:custom/card.js」と入力する。
　アスキーなどエンコードを行いたい場合はパイプで結んで登録する。
  「ascii-enc| javascript:custom/card.js」

