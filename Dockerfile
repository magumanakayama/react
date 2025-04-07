# コンテナのベースイメージ
FROM node:22-bookworm-slim
LABEL maintainer='マグマ中山'

# アプリケーションディレクトリ名を環境変数に指定
ENV FRONT_ROOT react

# git postgresのインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends git postgresql-client && \
    apt-get clean && rm -rf /var/lib/apt/lists/* 

# 実行ユーザー追加
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=1000

# アプリケーションのディレクトリ作成
RUN mkdir -p /$FRONT_ROOT/src

# コンテナ起動時スクリプトの生成
RUN echo '#!/bin/sh' > /usr/local/bin/dockerInit.sh \
&& echo 'touch ./yarn.lock && yarn install && touch ./absdefg.txt && exec "$@" ' >> /usr/local/bin/dockerInit.sh \
&& chmod +x /usr/local/bin/dockerInit.sh

# ユーザー変更/作業ディレクトリ変更
WORKDIR /$FRONT_ROOT
USER $USERNAME

# アプリケーションファイルのコピー/権限変更
RUN chown $USERNAME:dialout /$FRONT_ROOT/*

# コンテナのエントリポイントをdockerInit.shに設定する
ENTRYPOINT ["/usr/local/bin/dockerInit.sh"]
CMD ["tail", "-f", "/dev/null"]
# CMD ["yarn", "start"]