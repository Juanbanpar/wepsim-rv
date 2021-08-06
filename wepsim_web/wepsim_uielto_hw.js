/*
 *  Copyright 2015-2021 Felix Garcia Carballeira, Alejandro Calderon Mateos, Javier Prieto Cepeda, Saul Alonso Monsalve
 *
 *  This file is part of WepSIM.
 *
 *  WepSIM is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  WepSIM is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with WepSIM.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


        /*
         *  Simulated HW
         */

        /* jshint esversion: 6 */
        class ws_hw extends HTMLElement
        {
              constructor ()
              {
                    // parent
                    super();
              }

              render ( )
              {
                    // default content
                    var o1 = '<div id="config_HW" ' +
                             '     style="height:58vh; width:inherit; overflow-y:scroll; -webkit-overflow-scrolling:touch;"></div>' ;
                    this.innerHTML = o1 ;

                    // if no active hardware -> empty
                    var ahw = simhw_active() ;
                    if (ahw === null) {
                        return '' ;
                    }

                    // set and go
	            simcoreui_init_hw("#config_HW") ;

                    return o1 ;
              }

              connectedCallback ()
              {
                    this.render() ;
              }
        }

        if (typeof window !== "undefined") {
            window.customElements.define('ws-hw', ws_hw) ;
        }


        //
        //  Hardware Information Panel
        //

        var ws_signals_show_inactive = true ;
        var ws_states_show_inactive  = true ;

        function simcoreui_init_hw ( div_name )
        {
              var ahw = simhw_active() ;
	      var o = simcoreui_hw_summary_init(ahw) +
                      // simulated
                      simcoreui_hw_components_init(ahw) +
                      simcoreui_hw_elements_init(ahw) +
                      // simulation
		      simcoreui_hw_signals_init(ahw) +
		      simcoreui_hw_states_init(ahw)  +
		      simcoreui_hw_behaviors_init(ahw) ;
	      $(div_name).html(o) ;

	      $('[data-toggle="tooltip"]').tooltip({
	  	    trigger:   'hover',
		  sanitizeFn: function (content) {
			         return content ; // DOMPurify.sanitize(content) ;
			      }
	      }) ;

	      $('.popover_hw').popover({
	  	  trigger:    'hover click',
		  container:  'body',
		  placement:  'auto',
		  template:   '<div class="popover" role="tooltip">' +
			      '<div class="arrow border-dark" ' +
			      '     style="border-right-color:black !important;"></div>' +
			      '<h3 class="popover-header"></h3>' +
			      '<div class="popover-body bg-dark text-white border-dark"></div>' +
			      '</div>',
		  sanitizeFn: function (content) {
			         return content ; // DOMPurify.sanitize(content) ;
			      }
	      }) ;
        }

        function simcoreui_show_hw ( )
        {
              var ahw = simhw_active() ;

              simcoreui_hw_signals_update(ahw) ;
              simcoreui_hw_states_update(ahw) ;

              return true ;
        }

        function simcoreui_signal_dialog ( ahw_elto_name )
        {
              wepsim_update_signal_dialog(ahw_elto_name) ;
              $(".popover_hw").popover("hide") ;
        }

        // hw_summary

        function simcoreui_hw_summary_init ( ahw )
        {
	    // card with list
	    var o = '' ;
	    o += '<div class="card m-2">' +
		 '    <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
		 '      <h5 class="card-title">' +
		 '        <span class="row">' +
		 '          <span class="col-6">' + ahw.sim_name + ' (' + ahw.sim_short_name + ')</span>' +
		 '          <a data-toggle="collapse" href="#th_processor" role="button"   class="col w-25" ' +
		 'aria-expanded="false" aria-controls="th_processor">' +
		 '<img src="' + ahw.sim_img_processor + '" class="img-thumbnail" alt="sim_img_processor"></a>' +
		 '          <a data-toggle="collapse" href="#th_controlunit" role="button" class="col w-25" ' +
		 'aria-expanded="false" aria-controls="th_controlunit">' +
		 '<img src="' + ahw.sim_img_controlunit + '" class="img-thumbnail" alt="sim_img_controlunit"></a>' +
		 '        </span>' +
		 '      </h5>' +
		 '    </div>' +
		 '    <div class="card-body border border-light p-0">' +
		 '      <p class="card-text">' +
		 '      <span class="collapse multi-collapse" id="th_processor">' +
		 '<img src="' + ahw.sim_img_processor + '"   class="img-thumbnail mb-2" alt="sim_img_processor"></a>' +
		 '      </span>' +
		 '      <span class="collapse multi-collapse" id="th_controlunit">' +
		 '<img src="' + ahw.sim_img_controlunit + '" class="img-thumbnail mb-2" alt="sim_img_controlunit"></a>' +
		 '      </span>' +
		 '      </p>' +
		 '    </div>' +
		 '</div>' ;

	    return o ;
        }

        // signal

        function simcoreui_hw_signals_init ( ahw )
        {
	    var elto_c  = '' ;
	    var e = '' ;
	    var c = '' ;

	    // list of signals
	    c = '<span class="row justify-content-between">' ;
	    for (var elto in ahw.signals)
	    {
		 elto_c = 'hw_signal_strong_' + elto ;
		 e      = simcoreui_hw_signals_popup(ahw.signals, elto) ;

		 c += '<span class="' + elto_c + ' s-ina col-auto font-weight-normal">' +
		      '<a href="#" id="hw_signal_tt_' + elto + '" ' +
		      '   aria-hidden="false" ' +
		      '   class="popover_hw" data-toggle="popover" onclick="event.preventDefault();" ' +
		      '   data-html="true" title="" data-content="' + e + '">' + elto + '</a>' +
		      '</span>' ;
	    }
	    c += '</span>' ;

	    // return card with signal list
            return simcoreui_hw_init_signals_card(c) ;
        }

        function simcoreui_hw_init_signals_card ( content )
        {
	    var o = '  <div class="card m-2">' +
		    '    <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
		    '      <h5 class="card-title m-0">' +
		    '       <div class="container">' +
		    '       <span class="row">' +
		    '        <span class="col-auto pl-0" ' +
		    '              data-langkey="Signals">Signals</span>' +
		    '        <span class="btn-group col-auto ml-auto p-0" role="btn group" ' +
		    '              arial-label="active and dependencies">' +
                                simcoreui_hw_btn_active_signals_toggle() +
                                simcoreui_hw_btn_signals_dependencies_toggle() +
		    '        </span>' +
		    '       </span>' +
		    '       </div>' +
		    '      </h5>' +
		    '    </div>' +
		    '    <div class="card-body border border-light p-2">' +
		    '      <div id="depgraph1c" class="m-2 p-0 border collapse h-100" ' +
		    '           style="max-height:65vh; overflow:auto; resize:both;">' +
		    '         <span id="depgraph1">Loading...</span>' +
		    '      </div>' +
		    '      <p class="card-text">' + content + '</p>' +
		    '    </div>' +
		    '  </div>' ;

	    return o ;
        }

        function simcoreui_hw_btn_active_signals_toggle ( )
        {
            var o = '<span class="col-auto btn btn-sm btn-outline-secondary mr-2" ' +
		    '      data-toggle="tooltip" data-html="true" ' +
		    '      title="Shows/Hide inactive signals"' +
		    '      onclick="ws_signals_show_inactive = !ws_signals_show_inactive;' +
		    '               $(\'.s-ina\').toggle();' +
		    '               return false;" ' +
		    '      data-langkey="Active">Active</span>' ;

	    return o ;
        }

        function simcoreui_hw_btn_signals_dependencies_toggle ( )
        {
            var o = '<span class="col-auto btn btn-sm btn-outline-secondary" ' +
		    '      data-toggle="tooltip" data-html="true" ' +
		    '      title="Graph of the signal dependencies <br>(it needs several seconds to be displayed)."' +
		    '      onclick="$(\'#depgraph1c\').collapse(\'toggle\'); ' +
		    '               show_visgraph(jit_fire_dep, jit_fire_order);" ' +
		    '      data-langkey="Dependencies">Dependencies</span>' ;

	    return o ;
        }

        function simcoreui_hw_signals_popup ( ahw_signals, elto )
        {
              // value
              var elto_v  = ahw_signals[elto].value ;
              var elto_dv = ahw_signals[elto].default_value ;

              // v != dv
              var elto_c = (elto_v != elto_dv) ? '      col-auto font-weight-bold' :
						 's-ina col-auto font-weight-normal' ;

              // value (hex)
              elto_v  = '0x' +  elto_v.toString(16) ;
              elto_dv = '0x' + elto_dv.toString(16) ;

              var e = '' ;
              e = '<span style=\'text-align:left\'>' +
                  'name: '          + ahw_signals[elto].name  + '<br>' +
                  'value: '         + '<span' +
                                      ' onclick=simcoreui_signal_dialog(\'' + ahw_signals[elto].name + '\'); ' +
                                      ' class=\'font-weight-bold\'>' + elto_v +
                                      '</span><br>' +
                  'default_value: ' + elto_dv                 + '<br>' +
                  'nbits: '         + ahw_signals[elto].nbits + '<br>' +
                  'type: '          + ahw_signals[elto].type  + '<br>' +
                  'visible: '       + ahw_signals[elto].visible +
                  '<button type=\'button\' id=\'close\' data-role=\'none\' ' +
                  '        class=\'btn btn-sm btn-danger w-100 p-0 mt-2\' ' +
                  '        onclick=$(\'.popover_hw\').popover(\'hide\');>' +
                  '<span data-langkey=\'Close\'>Close</span></button>' +
                  '</span>' ;

              return e ;
        }

        function simcoreui_hw_signals_update ( ahw )
        {
              var elto_v  = '' ;
              var elto_dv = '' ;
              var e = '' ;

              // list of signals
              for (var elto in ahw.signals)
              {
                   e = simcoreui_hw_signals_popup(ahw.signals, elto) ;

                   id_tt     = "hw_signal_tt_"     + elto ;
                   id_strong = "hw_signal_strong_" + elto ;

                   // reset
                   $("." + id_tt).attr('data-content', e) ;
                   $("." + id_tt).attr('aria-hidden',  'false') ;
                   $("." + id_strong).attr('class', 'col-auto font-weight-bold ' + id_strong) ;
                   $("." + id_strong).show() ;

                   // set
                   elto_v  = ahw.signals[elto].value ;
                   elto_dv = ahw.signals[elto].default_value ;
                   if (elto_v == elto_dv)
                   {
                       $("." + id_tt).attr('aria-hidden', 'true') ;

                       $("." + id_strong).attr('class', 's-ina col-auto font-weight-normal ' + id_strong) ;
                       if (ws_signals_show_inactive == false) {
                           $("." + id_strong).hide() ;
                       }
                   }
              }

              return true ;
        }

        // hw_states

        function simcoreui_hw_states_init ( ahw )
        {
	    var elto_c  = '' ;
	    var e = '' ;
	    var c = '' ;

	    // list of states
	    c = '<span class="row justify-content-between">' ;
	    for (var elto in ahw.states)
	    {
		 elto_c = 'hw_state_strong_' + elto ;
		 e      = simcoreui_hw_states_popup(ahw.states, elto) ;

		 c += '<span class="' + elto_c + ' t-ina col-auto font-weight-normal">' +
		      '<a href="#" id="hw_state_tt_' + elto + '" ' +
		      '   class="popover_hw" data-toggle="popover" onclick="event.preventDefault();" ' +
		      '   data-html="true" title="" data-content="' + e + '">' + elto + '</a>' +
		      '</span>' ;
	    }
	    c += '</span>' ;

	    // card with state list
            return simcoreui_hw_init_states_card(c, ahw) ;
        }

        function simcoreui_hw_init_states_card ( content, ahw )
        {
	    var o = '<div class="card m-2">' +
		    ' <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
		    '      <h5 class="card-title m-0">' +
		    '       <div class="container">' +
		    '       <span class="row">' +
		    '        <span class="col-auto pl-0" ' +
		    '              data-langkey="States">States</span>' +
		    '        <span class="btn-group col-auto ml-auto p-0" role="btn group" ' +
		    '              arial-label="active and dependencies">' +
                               simcoreui_hw_btn_active_states_toggle() +
		    '          <span class="col-auto btn btn-sm btn-outline-secondary mr-2" ' +
		    '                data-toggle="tooltip" data-html="true" ' +
		    '                title="It shows the control states: PC, IR, and SP."' +
		    '                onclick="$(\'#ctrlstates1\').collapse(\'toggle\');" ' +
		    '                data-langkey="Control States">Control States</span>' +
		    '        </span>' +
		    '       </span>' +
		    '       </div>' +
		    '      </h5>' +
		    '    </div>' +
		    '    <div class="card-body border border-light p-2">' +
		    '      <div id="ctrlstates1" class="m-2 p-0 border collapse" ' +
		    '           style="max-height:65vh; overflow:auto; resize:both;">' +
		    '      <table id="ctrlstates1" class="table table-sm table-bordered p-0">' +
		    '         <tr>' +
		    '         <td>' + ahw.ctrl_states.pc.state + '</td>' +
                    '         <td>&rarr;</td>' +
		    '         <td>Program Counter (PC)</td>' +
		    '         </tr>' +
		    '         <tr>' +
		    '         <td>' + ahw.ctrl_states.ir.state + '</td>' +
                    '         <td>&rarr;</td>' +
		    '         <td>Instruction Register (IR)</td>' +
		    '         </tr>' +
		    '         <tr>' +
		    '         <td>' + ahw.ctrl_states.sp.state + '</td>' +
                    '         <td>&rarr;</td>' +
		    '         <td>Stack Pointer (SP)</td>' +
		    '         </tr>' +
		    '      </table>' +
		    '      </div>' +
		    '      <p class="card-text">' + content + '</p>' +
		    ' </div>' +
		    '</div>' ;

	    return o ;
        }

        function simcoreui_hw_btn_active_states_toggle ( )
        {
            var o = '<span class="col-auto btn btn-sm btn-outline-secondary mr-2" ' +
		    '      data-toggle="tooltip" data-html="true" ' +
		    '      title="Shows/Hide inactive states"' +
		    '      onclick="ws_states_show_inactive = !ws_states_show_inactive;' +
		    '               $(\'.t-ina\').toggle();' +
		    '               return false;" ' +
		    '      data-langkey="Active">Active</span>' ;

	    return o ;
        }

        function simcoreui_hw_states_popup ( ahw_states, elto )
        {
              var elto_v  = value_toString(ahw_states[elto].value) ;
              var elto_dv = value_toString(ahw_states[elto].default_value) ;

              // v != dv
              var elto_c = (elto_v != elto_dv) ? '      col-auto font-weight-bold' :
						 't-ina col-auto font-weight-normal' ;

              // nbits, and visible
              var elto_nb = '-' ;
              if (typeof ahw_states[elto].nbits != 'undefined') {
                  elto_nb = ahw_states[elto].nbits ;
	      }

              var elto_vi = '-' ;
              if (typeof ahw_states[elto].visible != 'undefined') {
                  elto_vi = ahw_states[elto].visible ;
	      }

              // compound
              var e = '<span style=\'text-align:left\'>' +
                      'name: '                 + elto + '<br>' +
                      'value: '                + '<span id=\'hw_state_value_' + elto + '\' ' + 
                                                 '      class=\'font-weight-bold\'>' + elto_v + 
                                                 '</span><br>' +
                      'default_value: '        + elto_dv + '<br>' +
                      'nbits: '                + elto_nb + '<br>' +
                      'visible: '              + elto_vi +
                      '<button type=\'button\' id=\'close\' data-role=\'none\' ' +
                      '        class=\'btn btn-sm btn-danger w-100 p-0 mt-2\' ' +
                      '        onclick=$(\'.popover_hw\').popover(\'hide\');>' +
                      '<span data-langkey=\'Close\'>Close</span></button>' +
                      '</span>' ;

              return e ;
        }

        function simcoreui_hw_states_update ( ahw )
        {
              var e = '' ;
              var elto_v  = '' ;
              var elto_dv = '' ;
              var elto_c  = '' ;
              var id_tt     = '' ;
              var id_strong = '' ;

              // list of states
              for (var elto in ahw.states)
              {
                   // popup
                   e = simcoreui_hw_states_popup(ahw.states, elto) ;

                   id_tt     = "hw_state_tt_"     + elto ;
                   id_strong = "hw_state_strong_" + elto ;

                   // reset
                   $("." + id_tt).attr('data-content', e) ;
                   $("." + id_tt).attr('aria-hidden', 'false') ;
                   $("." + id_strong).show() ;
                   $("." + id_strong).attr('class', 'col-auto font-weight-bold ' + id_strong) ;

                   // set if equal
                   elto_v  = value_toString(ahw.states[elto].value) ;
                   elto_dv = value_toString(ahw.states[elto].default_value) ;
                   if (elto_v == elto_dv)
                      {
                          $("." + id_tt).attr('aria-hidden', 'true') ;

                          if (ws_states_show_inactive == false) {
                              $("." + id_strong).hide() ;
                          }

                          $("." + id_strong).attr('class', 't-ina col-auto font-weight-normal ' + id_strong) ;
                      }
              }

              return true ;
        }

        // behaviors

        function simcoreui_hw_behaviors_init ( ahw )
        {
              // list of behaviors
              var c = '<span class="row justify-content-between">' ;
              for (var elto in ahw.behaviors)
              {
                       c = c + '<span class="col-auto">' +
                               '<a href="#" class="popover_hw" data-toggle="popover" onclick="event.preventDefault();" ' +
                               '   data-html="true" title="" data-content="' +
                               '<span style=\'text-align:left\'>' +
                               'name: '            + elto + '<br> ' +
                               'nparameters: '     + ahw.behaviors[elto].nparameters + '<br> ' +
                            // 'operation: '       + ahw.behaviors[elto].operation.toString() + '<br> ' +
                            // 'verbal: '          + ahw.behaviors[elto].verbal.toString() + '<br> ' +
                               '<button type=\'button\' id=\'close\' data-role=\'none\' ' +
                               '        class=\'btn btn-sm btn-danger w-100 p-0 mt-2\' ' +
                               '        onclick=$(\'.popover_hw\').popover(\'hide\');><span data-langkey=\'Close\'>Close</span></button>' +
                               '</span>' +
                               '">' + elto + '</a></span>' ;
              }
              c = c + '</span>' ;

              // card with behaviors list
              var o = '  <div class="card m-2">' +
                      '    <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
                      '      <h5 class="card-title m-0"><span data-langkey="Behaviors">Behaviors</span></h5>' +
                      '    </div>' +
                      '    <div class="card-body border border-light p-2">' +
                      '      <p class="card-text">' + c + '</p>' +
                      '    </div>' +
                      '  </div>' ;

              return o ;
        }

        // list components

        function simcoreui_hw_components_init ( ahw )
        {
	    var o = '' ;
	    var c = '' ;

	    c = '<span class="row justify-content-between">' ;
	    for (var elto in ahw.components)
	    {
		 c += '<span class="col-auto">' +
		      '<a href="#" class="popover_hw" data-toggle="popover" data-html="true" ' +
		      '   onclick="event.preventDefault();" title="" data-content="' +
		      'name: '            + ahw.components[elto].name + '<br> ' +
		      'version: '         + ahw.components[elto].version + '<br> ' +
		      'abilities: '       + ahw.components[elto].abilities.join(" + ") +
		      '<button type=\'button\' id=\'close\' data-role=\'none\' ' +
		      '        class=\'btn btn-sm btn-danger w-100 p-0 mt-2\' ' +
		      '        onclick=$(\'.popover_hw\').popover(\'hide\');>' +
		      '<span data-langkey=\'Close\'>Close</span></button>' +
		      '">' + elto + '</a></span>' ;
	    }
	    c += '</span>' ;

	    // card with list
            o += '<div class="card m-2">' +
                 '  <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
                 '    <h5 class="card-title m-0"><span data-langkey="Components">Components</span></h5>' +
                 '  </div>' +
                 '  <div class="card-body border border-light p-2">' +
                 '    <p class="card-text">' + c + '</p>' +
                 '  </div>' +
                 '</div>' ;

	    return o ;
        }

        // list subcomponents (name, states, signals)

        function simcoreui_hw_elements_init ( ahw )
        {
	    var i = 0 ;
	    var o = '' ;
	    var c = '' ;
	    var p = '' ;
	    var elto_c = '' ;
	    var last_belongs = '' ;

            o += '<div class="table-responsive">' +
                 '<table class="table table-sm table-bordered table-striped">' ;

	    // header
            o += '<thead><tr>' +
                 '<th class="col-auto p-0">Name</th>' +
                 '<th class="col-auto p-0">' +
		 ' <span class="pl-0" data-langkey="States (In)">States (In)</span>' +
		 '</th>' +
                 '<th class="col-auto p-0">' +
		 ' <span class="pl-0" data-langkey="States (Out)">States (Out)</span>' +
		 '</th>' +
                 '<th class="col-auto p-0">' +
		 ' <span class="pl-0" data-langkey="Signals">Signals</span>' +
		 '</th>' +
                 '</tr></thead>' ;

	    // rows of elements (name + states + signals)
            o += '<tbody>' ;
	    for (var e in ahw.elements)
	    {
		 // new row 
                 elto = ahw.elements[e] ;

                 if (elto.belongs != last_belongs) {
                     o += '<tr><td colspan="4" class="font-weight-lighter">' + elto.belongs + '</td></tr>' ;
	             last_belongs = elto.belongs ;
                 }

                 o += '<tr>' ;

		 // 1) name
                 o += '<td>' + elto.name + '</td>' ;

		 // 2) list of input states
		 c = '<span class="row justify-content-between text-wrap">' ;
		 for (i=0; i<elto.states_inputs.length; i++)
		 {
                         state_ref = elto.states[elto.states_inputs[i]].ref ;
		         elto_c    = 'hw_state_strong_' + state_ref ;

			 // popup
                         p = '';
                         if (typeof ahw.states[state_ref] != "undefined") {
			     p = simcoreui_hw_states_popup(ahw.states, state_ref) ;
                         }

			 c += '<span class="' + elto_c + ' t-ina col-auto font-weight-normal">' +
			      '<a href="#" id="hw_state_tt_' + state_ref + '" ' +
			      '   class="popover_hw" data-toggle="popover" ' +
                              '   onclick="event.preventDefault();" ' +
			      '   data-html="true" title="" data-content="' + p + '">' + state_ref + '</a>' +
			      '</span>' ;
		 }
		 c += '</span>' ;
                 o += '<td>' + c + '</td>' ;

		 // 3) list of output states
		 c = '<span class="row justify-content-between text-wrap">' ;
		 for (i=0; i<elto.states_outputs.length; i++)
		 {
                         state_ref = elto.states[elto.states_outputs[i]].ref ;
		         elto_c    = 'hw_state_strong_' + state_ref ;

			 // popup
                         p = '';
                         if (typeof ahw.states[state_ref] != "undefined") {
			     p = simcoreui_hw_states_popup(ahw.states, state_ref) ;
                         }

			 c += '<span class="' + elto_c + ' t-ina col-auto font-weight-normal">' +
			      '<a href="#" id="hw_state_tt_' + state_ref + '" ' +
			      '   class="popover_hw" data-toggle="popover" ' +
                              '   onclick="event.preventDefault();" ' +
			      '   data-html="true" title="" data-content="' + p + '">' + state_ref + '</a>' +
			      '</span>' ;
		 }
		 c += '</span>' ;
                 o += '<td>' + c + '</td>' ;

		 // 4) list of signals
		 c = '<span class="row justify-content-between text-wrap">' ;
		 for (var es in elto.signals)
		 {
                         signal_ref = elto.signals[es].ref ;
		         elto_c    = 'hw_signal_strong_' + signal_ref ;

			 // popup
                         e = '';
                         if (typeof ahw.signals[signal_ref] != "undefined") {
			     e = simcoreui_hw_states_popup(ahw.signals, signal_ref) ;
                         }

			 // value
			 c += '<span class="' + elto_c + ' s-ina col-auto font-weight-normal">' +
			      '<a href="#" id="hw_signal_tt_' + signal_ref + '" ' +
			      '   aria-hidden="false" ' +
			      '   class="popover_hw" data-toggle="popover" onclick="event.preventDefault();" ' +
			      '   data-html="true" title="" data-content="' + e + '">' + signal_ref + '</a>' +
			      '</span>' ;
		 }
		 c += '</span>' ;
                 o += '<td>' + c + '</td>' ;

                 // end of row
                 o += '</tr>' ;
	    }
            o += '</tbody></table></div>' ;

	    // return card with list
            return simcoreui_hw_init_elements_card(o) ;
        }

        function simcoreui_hw_init_elements_card ( content )
        {
            var o = '' ;

	    o = '  <div class="card m-2">' +
		'    <div class="card-header border border-light p-2" style="background-color:#E8E8E8">' +
		'      <h5 class="card-title m-0">' +
		'       <div class="container">' +
		'       <span class="row">' +
		'        <span class="col-auto pl-0" ' +
		'              data-langkey="SubComponents">SubComponents</span>' +
		'        <span class="btn-group col-auto ml-auto p-0" role="btn group" ' +
		'              arial-label="active and dependencies">' +
		'        </span>' +
		'       </span>' +
		'       </div>' +
		'      </h5>' +
		'    </div>' +
		'    <div class="card-body border border-light p-2">' +
		'      <p class="card-text">' + content + '</p>' +
		'    </div>' +
		'  </div>' ;

	    return o ;
        }
