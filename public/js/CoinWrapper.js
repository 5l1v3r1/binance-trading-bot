/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
class CoinWrapper extends React.Component {
  render() {
    const { symbolInfo, sendWebSocket } = this.props;

    const className = 'coin-wrapper ' + this.props.extraClassName;

    return (
      <div className={className} data-symbol={symbolInfo.symbol}>
        <div className='coin-info-wrapper'>
          <CoinWrapperSymbol
            symbolInfo={symbolInfo}
            sendWebSocket={sendWebSocket}
          />
          <CoinWrapperBalance symbolInfo={symbolInfo} />
          <CoinWrapperBuy symbolInfo={symbolInfo} />
          <CoinWrapperSell symbolInfo={symbolInfo} />
          <CoinWrapperOpenOrder symbolInfo={symbolInfo} />
        </div>
      </div>
    );
  }
}
