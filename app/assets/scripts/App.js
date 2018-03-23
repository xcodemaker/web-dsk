//var Person=require('./modules/Person'); webpack method importing class
var $=require('jquery');
// import Person from './modules/Person';//es6 way of import
// class Adult extends Person{
//     payTaxes(){
//         console.log(this.name+" now owes $0 in taxes.")
//     }
// }

// var john=new Person("jonh deo","red");
// john.greet();
// var jane=new Adult("jane smith","orange");
// jane.greet();
// jane.payTaxes();

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal'

var mobileMenu= new MobileMenu();

new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"65%");
var stickyHeader=new StickyHeader();
var modal=new Modal();