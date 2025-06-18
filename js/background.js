//var imgpass = '/Users/yuichiro/Documents/Univ/website/images/';
var imgpass = 'images/';
// 表示させたい画像のファイル名＋拡張子を配列に格納
var imgfile = [];
imgfile[0] = 'header-background1.jpg';
imgfile[1] = 'header-background2.jpg';
imgfile[2] = 'header-background3.jpg';
imgfile[3] = 'header-background4.jpg';
imgfile[4] = 'header-background5.jpg';
imgfile[5] = 'header-background6.jpg';
imgfile[6] = 'header-background7.jpg';
imgfile[7] = 'header-background8.jpg';
imgfile[8] = 'header-background9.jpg';
imgfile[9] = 'header-background10.jpg';
imgfile[10] = 'header-background11.jpg';
imgfile[11] = 'header-background12.jpg';
imgfile[12] = 'header-background13.jpg';
imgfile[13] = 'header-background14.jpg';
// 画像の数を元に、ランダムな数値を算出
var n = Math.floor(Math.random() * imgfile.length);
var bgbox = $('header');
// 算出したランダムな数値の順番にいるファイル情報をbackground-imageに設定する
bgbox.css('background-image', 'url(' + imgpass + imgfile[n] + ')');
