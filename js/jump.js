$(function(){
  // #で始まる出発地点をクリックした場合に処理を実行
 $('a[href^="#"]').click(function() {
  //  クリックしたアンカータグのhrefの内容を取得
  var href= $(this).attr("href");
  // 自リンクおよびリンク無しではないとき
  if(href !== "#" && href !== "") {
    // ファイルパスを取得
    var path = location.pathname;
    // ファイルパスの最後尾ファイル名の部分を削除
    var dir_path = path.split("/").reverse().slice(2).reverse().join("/");
    // console.log(dir_path);
    // index.htmlに値渡し、#もエンコード
    location.href = dir_path + '/index.html?name=' +   encodeURIComponent(href);
  }
 });
});
