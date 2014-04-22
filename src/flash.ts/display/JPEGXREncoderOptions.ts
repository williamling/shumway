/**
 * Copyright 2014 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: JPEGXREncoderOptions
module Shumway.AVM2.AS.flash.display {
  import notImplemented = Shumway.Debug.notImplemented;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  export class JPEGXREncoderOptions extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static classSymbols: string [] = null; // [];
    
    // List of instance symbols to link.
    static instanceSymbols: string [] = null; // ["quantization", "colorSpace", "trimFlexBits"];
    
    constructor (quantization: number /*uint*/ = 20, colorSpace: string = "auto", trimFlexBits: number /*uint*/ = 0) {
      quantization = quantization >>> 0; colorSpace = asCoerceString(colorSpace); trimFlexBits = trimFlexBits >>> 0;
      false && super();
      notImplemented("Dummy Constructor: public flash.display.JPEGXREncoderOptions");
    }
    
    // JS -> AS Bindings
    
    quantization: number /*uint*/;
    colorSpace: string;
    trimFlexBits: number /*uint*/;
    
    // AS -> JS Bindings
    
  }
}
