

<div class="text-label  {label.color}">
  <div class="text">{`${label.name}${label.todo}`}</div>
</div>

<script lang="ts">
import type { Unit as UnitType,Label as LabelType } from '../../types'
export let label:LabelType;
</script>

<style>
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
    .text-label{
        display: flex;
        width: 100%;
        height: 13px;
        background: rgba(255,0,0,0.3);
        border-radius:2px;      
        align-items: center;
        justify-content: center;
        word-break: keep-all;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .text{
      font-size: 10px;
      padding:2% 7% 0;
      transform: scale(0.5);
      
}
@media screen and (max-width: 500px) {
        .text {
      transform: scale(0.7);

    }
    }
    .pink{
      background: rgb(255,221,244);
    }
    .red{
      background: rgb(240,128,128);
    }
    .blue{
      background: rgb(113,199,236);
    }
    .green{
	    background:rgb(168,231,191)

  }
    .purple{
      background: rgb(207, 159, 255);
    }
    .yellow{
      background: rgb(247, 220, 111);
    }
    .white{
      background: rgb(236, 240, 241 );
    }
    .grey{
      background: rgb(215, 219,221);
    }

</style>