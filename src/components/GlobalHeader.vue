<template>
  <header>
    <div class="grid display-none-mobile menu">
      <div class="col-4">
        <RouterLink to="/" id="home" style="z-index: 9999">
          <img src="music_piano.png" width="48px" height="48px" style="background-color: white;border-radius: 3rem;padding: .3rem;margin: .5rem 0;vertical-align: middle;box-sizing: content-box" alt="piano">
        </RouterLink>
      </div>
      <div class="grid col-8">
        <ul class="grid col-12">
          <li class="col">
            <RouterLink to="/philosophy">
              理念・特長
            </RouterLink>
          </li>
          <li class="col">
            <RouterLink to="/lesson">
              レッスン
            </RouterLink>
          </li>
          <li class="col">
            <RouterLink to="/event">
              講座・イベント
            </RouterLink>
          </li>
          <li class="col">
            <RouterLink to="/rental">
              スタジオ貸出
            </RouterLink>
          </li>
          <li class="col">
            <RouterLink to="/contact">
              お問い合わせ
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <nav class="menu-container display-none-pc">
      <ul>
        <li>
          <RouterLink to="/philosophy">
            理念・特長
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/lesson">
            レッスン
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/event">
            講座・イベント
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/rental">
            スタジオ貸出
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">
            お問い合わせ
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
