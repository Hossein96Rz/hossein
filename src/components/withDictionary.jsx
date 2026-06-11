import { getDictionary } from "../dictionaries";
import getLocale from "../utils/getLocale";

function withDictionary(Component) {
  return async function WrappedComponent(props) {
    const locale = await getLocale();
    const dic = await getDictionary(locale);
    return <Component {...props} dictionary={dic} />;
  };
}
export default withDictionary;
