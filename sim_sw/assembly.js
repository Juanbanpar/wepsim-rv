/*
 *  Copyright 2015-2023 Saul Alonso Monsalve, Javier Prieto Cepeda, Felix Garcia Carballeira, Alejandro Calderon Mateos
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
 *  Compile assembly
 */

function simlang_compile ( text, datosCU )
{
     var ret = null ;

     if ( get_cfg('beta_features') )
     {
         // Testing in beta...
         ret = wsasm_src2mem(datosCU, text) ;
     }   
     else   
     {   
         // Initial version for 2023/24...
    //   ret = simlang_compile_v1(text, datosCU) ;  // disabled for testing Juan Banga version... 

         // Juan Banga version with support for firmware 2
         // (but additional full-testing is still pending to ensure that all laboratories are fully compatible with 0-problems)
         ret = simlang_compile_v2(text, datosCU) ;
     }   

     return ret ;
}

