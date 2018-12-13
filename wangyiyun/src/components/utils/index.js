import React from "react";

class Index extends React.PureComponent {
    static defaultProps = {
        text: "暂无数据"
    }
    render() {
        const { length, text } = this.props;
        return <div>
            {
                length<1 ? text:null
            }
        </div>
    }
}
export default Index;