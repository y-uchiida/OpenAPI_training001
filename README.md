# OpenAPI_training001

OpenAPI の仕様に沿って、サンプルの WebAPI を設計・実装する練習をしました

## 開発環境

- Windows 11 (21H2)
- WSL2 Ubuntu 20.04
- OpenAPI 3.0.3
- Docker 20.10.17
- Swagger UI docker image latest

## ローカルでのテスト

### Docker

簡易なコマンドで動作を確認できるよう、docker-compose.yml ファイルを作成してあります。  
本リポジトリをクローンし、以下のコマンドを実行してください

```
$ docker compose up -d
```

その後、`http://localhost` で swagger editor が表示されます。  
左ペインの yml エディタに、クローンした`openapi.yml` の内容を貼り付けると、最終的な成果物を確認できます。

### stab

レスポンスの確認までできるスタブサーバを作成してあります。  
`nodejs-server-server-generated` ディレクトリに移動し、以下コマンドを実行します。  
※ node.js がインストールされている必要があります

```
$ npm start
```

その後、`http://localhost:8080/docs` にアクセスすすると、swagger ui が表示されます。  
ここで、server を `"Local development`, port を `8080` に設定します。  
各エンドポイントの`Try it out` ボタンでリクエストを送信し、その結果が画面上に表示されます。

## 参考資料

以下の教材をベースにソースコードを作成しました
REST WebAPI サービス 設計 :  
https://www.udemy.com/course/rest-webapi-development/
