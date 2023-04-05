
import Button from './Button';

export default{
    'title': 'Button',
    component: Button,
}
const Template = (arg) => <div style={{padding: '20px'}}><Button  {...arg}/></div>

export const Default = Template.bind({});

Default.args = {
    text: 'asdf',
    backgroundColor: 'red'
}

export const Default1 = Template.bind({});
export const Default2 = Template.bind({});