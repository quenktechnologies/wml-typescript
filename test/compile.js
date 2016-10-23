import must from 'must';
import crypto from 'crypto';
import fs from 'fs';
import compile from '../src';

var input;

function hash(v) {

  v = v.replace(/\s+/, '');
  return crypto.createHash('md5').update(v).digest('hex');

}

describe('compile()', function() {

  it('should compile a valid template', function() {

    input = `

<!-- Sample wml template file using as much features as possible in one go -->

import {Modal, ModalHeader, ModalBody, ModalFooter} from "modals";
import Button from "button";
import * as inputs from "inputs";
import filter from 'filter';

uses x, y

{% export template %}

      <span>Template</span>

{% endexport %}

{% export Button from "button" %}

<div class="container">

      <!-- Begin content. -->

      <div class="row">

            <div class="column-lg-12">

                  <form onsubmit={{this::formSubmitted}}>

                        <inputs.Text
                        name="Username"
                        oninput={{e=>this.input(e.target.value)}}/>

                        <inputs.Password
                        name="Password"
                        oninput={{(e)=>this.input(e.target.value)}}/>

                  </form>

            </div>

      </div>

      <div class="row">

            {% switch this.slide?this.slide:this.refereshSlides() %}

                <!-- switch was implemented for easier tabs -->

                  {% case "greeting" %}

                        <p>Hi there!</p>

                  {% endcase %}

                  {% case "tip" %}

                        {{this.getTip()}}

                  {% endcase %}

                  {% default case %}

                        <p>Have a good day!</p>

                  {% endcase %}

            {% endswitch %}

      </div>

      <div id={{'modals'}}>

            <Modal x={{x}} y={{y}}>

                <ModalHeader>Message</ModalHeader>

                <ModalBody>

                      {% if this.hasError() %}

                            Error: <span class="error">{{this.message}}</span>

                      {% else if this.hasSuccess() %}

                            Success: <span class="success">{{this.message}}</span>

                      {% else if this.hasWarning() %}

                            Warning: <span class="warning">{{this.message}}</span>

                      {% else %}

                            Message : {{this.message | filter.propercase | filter.trunc(30)}}

                      {% endif %}

                </ModalBody>

                <ModalFooter>

                      <Button
                      button:text="Close"
                      onclick={{this::close}}/>

                      <Button
                      button:text="Ok"
                      onclick={{this::ok}}/>

                </ModalFooter>

            </Modal>

      </div>
</div>

    `;

    must(compile(input)).be(fs.readFileSync('./test/templates/sample.js', {encoding:'utf8'}));

  });

});

