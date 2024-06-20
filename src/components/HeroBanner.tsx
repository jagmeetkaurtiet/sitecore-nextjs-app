import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeroBannerProps = ComponentProps & {
  fields: {
    Heading: Field<string>;
  };
};

const HeroBanner = (props: HeroBannerProps): JSX.Element => (
  <div>
    <p>HeroBanner Component</p>
    <Text field={props.fields.Heading} />
  </div>
);

export default withDatasourceCheck()<HeroBannerProps>(HeroBanner);
