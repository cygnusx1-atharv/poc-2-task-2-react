import Icon from "./Icon"

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'top-left',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            defaultValue: 'airport',
            options: ['airport', 'bicycle', 'dog-park', 'ferry', 'moo', 'park', 'restaurant', 'rocket', 'toilets', 'zoo'],
            control: {type: 'select'}
        }
    }
}

const Template = args => <Icon {...args} />

export const Default = Template.bind({})