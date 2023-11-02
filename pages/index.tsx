import { withTemplateConfig } from 'services/template/withTemplateConfig';

export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  return {
    props: await withTemplateConfig({})
  }
}
