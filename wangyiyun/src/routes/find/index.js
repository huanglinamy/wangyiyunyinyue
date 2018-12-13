import React from 'react';
// import Empty from "../../components/utils";
import HotMovie from "./hot";
import NewMovie from "./new";
import './index.scss';

class Index extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            activeFlag: true,
            tabTitlle: [{
                name: "主播电台"
            }, {
                name: "个性推荐"
            }]
        }
    }

    render() {
        const { tabTitlle, activeFlag } = this.state;
        // console.log('props..', this.props);
        return (
            <div className="findlist">
                <div className="header1">
                    <p><img src={require('../../assets/icon.png')} alt="" /></p>
                    <label>
                        <input type="text" placeholder="猜你喜欢佛生" />
                    </label>
                    <p><img src={require('../../assets/icon.png')} alt="" /></p>
                </div>
                {/* <Empty length={tabTitlle.length} /> */}
                <div className="nav1">
                    {
                        tabTitlle.map((itm, ind) => {
                            return <span onClick={() => {
                                this.setState({
                                    activeFlag: ind % 2 === 0
                                })
                            }} key={ind}>{itm.name}</span>
                        })
                    }
                </div>
                <div>
                    {
                        activeFlag ? <HotMovie /> : <NewMovie />

                    }
                </div>
            </div>
        )
    }
}

export default Index;