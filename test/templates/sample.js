import { Modal,ModalHeader,ModalBody,ModalFooter } from "modals";
import Button from "button";
import * as inputs from "inputs";
import filter from 'filter';

export function template(make) { return make.node('span',{html:{}},[make.text(`Template`)]);}
export Button from "button";

export default function (make ,x,y) { return make.node('div',{html:{'class': "container"}},[make.node('div',{html:{'class': "row"}},[make.node('div',{html:{'class': "column-lg-12"}},[make.node('form',{html:{'onsubmit': this.formSubmitted.bind(this)}},[make.node('inputs.Text',{html:{'name': "Username",'oninput': function function_literal_1(e){ return this.input(make.resolve(e, 'target.value')); }.bind(this)}},[]),make.node('inputs.Password',{html:{'name': "Password",'oninput': function function_literal_2(e){ return this.input(make.resolve(e, 'target.value')); }.bind(this)}},[])])])]),make.node('div',{html:{'class': "row"}},[make.$switch((make.resolve(this, 'slide'))? make.resolve(this, 'slide') : this.refereshSlides(),{ "greeting" : function case_statement1() { return[make.node('p',{html:{}},[make.text(`Hi there!`)])];}.bind(this),  "tip" : function case_statement2() { return[this.getTip()];}.bind(this),  default : function case_statement3() { return[make.node('p',{html:{}},[make.text(`Have a good day!`)])];}.bind(this),})]),make.node('div',{html:{'id': 'modals'}},[make.widget(Modal,{html:{'x': x,'y': y}},[make.widget(ModalHeader,{html:{}},[make.text(`Message`)]),make.widget(ModalBody,{html:{}},[make.$if(this.hasError(), function if0(){return [make.text(`

                            Error: `),make.node('span',{html:{'class': "error"}},[make.resolve(this, 'message')])];}.bind(this),function elseif0() { return make.$if(this.hasSuccess(),function if0() { return [make.text(`

                            Success: `),make.node('span',{html:{'class': "success"}},[make.resolve(this, 'message')])];}.bind(this),function elseif1() { return make.$if(this.hasWarning(),function if1() { return [make.text(`

                            Warning: `),make.node('span',{html:{'class': "warning"}},[make.resolve(this, 'message')])];}.bind(this),function else_clause0() { return [make.text(`

                            Message : `),filter.trunc.apply(this, [filter.propercase.apply(this, [make.resolve(this, 'message')]),30])];}.bind(this) );}.bind(this) );}.bind(this))]),make.widget(ModalFooter,{html:{}},[make.widget(Button,{html:{'onclick': this.close.bind(this)},button:{'text': "Close"}},[]),make.widget(Button,{html:{'onclick': this.ok.bind(this)},button:{'text': "Ok"}},[])])])])]); }