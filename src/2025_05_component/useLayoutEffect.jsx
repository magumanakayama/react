// import React, { useLayoutEffect, useState } from 'react';

// //待ち時間の設定
// const sleep = (waitMsec) => {
//   var startMsec = new Date();
//   while (new Date() - startMsec < waitMsec);
// }

// export default function LayoutEffect(){
//   const [text, setText] = useState("")
//   //画面描画前に実行
//   useLayoutEffect(() => {
//     console.log("useLayoutEffect実行");
//       sleep(1000);                  //5秒待
//       setText("表示されました！")    //テキストの設定
//     });

//     return <p>{`text:${text}`}</p>
//   }




import React, { useEffect, useState } from 'react';

//待ち時間の設定
const sleep = (waitMsec) => {
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}

export default function LayoutEffect(){
  const [text, setText] = useState("")
  //画面描画後に実行
  useEffect(() => {
    console.log("useEffect実行");
      sleep(1000);                  //5秒待
      setText("表示されました！")    //テキストの設定
    });

    return <p>{`text:${text}`}</p>
  }