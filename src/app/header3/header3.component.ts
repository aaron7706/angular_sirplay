import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header3',
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {

  jquery(){
    $('.header').toggleClass('active')
  }

animation(){
  $("#panel").css("display", "none");
  $("#panel_1").css("display", "block");
  $(".res_data_1").toggleClass('listanimation')

}
animation1(){
  $("#panel").css("display", "block");
  $("#panel_1").css("display", "none");
  $(".res_data").toggleClass('listanimation1')
}

animation12(){
  $("#panel").css("display", "none");
  $("#panel_2").css("display", "block");
  $(".res_data_1").toggleClass('listanimation')

}

animation_2(){
  $("#panel").css("display", "block");
  $("#panel_2").css("display", "none");
  $(".res_data").toggleClass('listanimation1')
}

animated(){
  $("#panel").css("display", "none");
  $("#panel_3").css("display", "block");
  $(".res_data_1").toggleClass('listanimation')

}

animated_1(){
  $("#panel").css("display", "block");
  $("#panel_3").css("display", "none");
  $(".res_data").toggleClass('listanimation1')
}

anime(){
  $("#panel").css("display", "none");
  $("#panel_4").css("display", "block");
  $(".res_data_1").toggleClass('listanimation')

}

anime_1(){
  $("#panel").css("display", "block");
  $("#panel_4").css("display", "none");
  $(".res_data").toggleClass('listanimation1')
}


}
