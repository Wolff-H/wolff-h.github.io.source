interface Window
{
    [other_attributes: string]: any
}

declare module "vue-inline-svg"
{
    function InlineSvgPlugin(Vue) :void
    const InlineSvgComponent:any

    export{
        InlineSvgPlugin,
        InlineSvgComponent,
    }
    export default InlineSvgComponent
}