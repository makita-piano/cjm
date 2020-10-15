<template>
  <header>
    <div class="grid display-none-mobile">
      <div class="col-4">
        <RouterLink to="/" id="home" style="z-index: 9999">
          <img src="tekitou.png" width="80%" height="100px" style="background-color: white;border-radius: 3rem;padding: .3rem;margin: .5rem 0;vertical-align: middle;box-sizing: content-box" alt="piano">
        </RouterLink>
      </div>
      <div class="grid col-8" style="padding: 0 1rem">
        <ul class="grid col-12">
          <li class="col-middle" style="text-align: center">
            <RouterLink to="/philosophy">
              理念・特長
            </RouterLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <RouterLink to="/lesson">
              レッスン
            </RouterLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <RouterLink to="/event">
              講座・イベント
            </RouterLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <RouterLink to="/rental">
              スタジオ貸出
            </RouterLink>
          </li>
          <li class="col-middle" style="text-align: center">
            <RouterLink to="/contact">
              お問い合わせ
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <nav class="menu-container display-none-pc">
      <ul class="menu">
        <li class="menu-item">
          <RouterLink to="/philosophy">
            理念・特長
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/lesson">
            レッスン
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/event">
            講座・イベント
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/rental">
            スタジオ貸出
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink to="/contact">
            お問い合わせ
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
