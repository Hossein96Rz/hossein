import withDictionary from "../../../components/withDictionary";

export const metadata = {
  title: "About",
  description: "About page",
};

function About({ dictionary }) {
  return <p>{dictionary.about}</p>;
}

export default withDictionary(About);
