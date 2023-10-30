// 初期設定
var currentObject = 1; // 最初に表示するオブジェクト
var objects = ['animated-asset', 'animated-asset-2']; // 使用するオブジェクトのIDリスト

// ボタン要素を取得
var switchButton = document.querySelector('.btn[data-action="change"]');

// シーン要素を取得
var scene = document.querySelector('a-scene');

// ボタンクリック時の処理
switchButton.addEventListener('click', function() {
    // 現在のオブジェクトを非表示に
    var currentObjectID = objects[currentObject - 1];
    var currentObjectEntity = scene.querySelector('#' + currentObjectID);
    currentObjectEntity.setAttribute('visible', false);

    // 次のオブジェクトに切り替え
    currentObject = (currentObject % objects.length) + 1;

    // 次のオブジェクトを表示
    var nextObjectID = objects[currentObject - 1];
    var nextObjectEntity = scene.querySelector('#' + nextObjectID);
    nextObjectEntity.setAttribute('visible', true);
});
