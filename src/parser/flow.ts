import { parser as babel } from "recast/parsers/babel";
import getBabelOptions, { Overrides } from "recast/parsers/_babel_options";

export function parse(source: string, options?: Overrides) {
  const babelOptions = getBabelOptions(options);
  babelOptions.plugins.push("jsx", "flow", "flowComments");
  return babel.parse(source, babelOptions);
}
