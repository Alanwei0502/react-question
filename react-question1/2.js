/** HTML
 <div class="container">
    <div class="header">5/8 外出確認表</div>
    <div class="content">
      <ol class="shop-list">
        <li class="item">麵包</li>
        <li class="item">短袖衣服</li>
        <li class="item">飲用水</li>
        <li class="item">帳篷</li>
      </ol>
      <ul class="shop-list">
        <li class="item">暈車藥</li>
        <li class="item">感冒藥</li>
        <li class="item">丹木斯</li>
        <li class="item">咳嗽糖漿</li>
      </ul>
    </div>
    <div class="footer">以上僅共參考</div>
  </div>
**/
/** CSS
  .container {
        font-size: 14px;
      }
      .container .header {
        font-size: 18px;
      }
      .container .shop-list {
        list-style: none;
        margin-left: -15px;
      }
      .container .shop-list li.item {
        color: green;
      }
      .container .shop-list .item:first-child {
        //Explain why does this color not works, and how to fix make it work on 1st list 
        //  因為css權重的問題，上面 li.item 的權重大於 .item，如果要讓 1st list 生效，可以加上 :first-child 
        color: blue;
      }

      // Write styling make every other line give background color to next one
      .container .shop-list li:nth-child(odd) {
        background-color: #f0f0f0;
      }
 **/
