'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Tokenizer = void 0;
// tslint:disable-next-line:import-name
const wink_tokenizer_1 = __importDefault(require('wink-tokenizer'));
class Tokenizer {
  constructor() {
    this.tokenizer = new wink_tokenizer_1.default();
  }
  tokenize(document) {
    return this.tokenizer.tokenize(document).map(({ value }) => value);
  }
}
exports.Tokenizer = Tokenizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5pemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rva2VuaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx1Q0FBdUM7QUFDdkMsb0VBQTJDO0FBRTNDLE1BQWEsU0FBUztJQUdwQjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3QkFBYSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQVZELDhCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9rZW5pemVyIGFzIElUb2tlbml6ZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmltcG9ydC1uYW1lXG5pbXBvcnQgV2lua1Rva2VuaXplciBmcm9tIFwid2luay10b2tlbml6ZXJcIjtcblxuZXhwb3J0IGNsYXNzIFRva2VuaXplciBpbXBsZW1lbnRzIElUb2tlbml6ZXIge1xuICBwcml2YXRlIHRva2VuaXplcjogV2lua1Rva2VuaXplcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRva2VuaXplciA9IG5ldyBXaW5rVG9rZW5pemVyKCk7XG4gIH1cblxuICB0b2tlbml6ZShkb2N1bWVudDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnRva2VuaXplci50b2tlbml6ZShkb2N1bWVudCkubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgfVxufVxuIl19
