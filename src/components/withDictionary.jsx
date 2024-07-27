import { getDictionary } from "../dictionaries";

function withDictionary(Component) {
  return async function WrappedComponent(props) {
    const { lang } = props.params;
    const dic = await getDictionary(lang);
    return <Component {...props} dictionary={dic} />;
  };
}
export default withDictionary;
