import React from 'react';

interface DataRowProps {
    catergory: string,
    value: string,
    max?: number,
}

const DataRow : React.FC<DataRowProps> = ({ catergory, value, max }) => {
    const style = max && max !== 0 ? {"--precentage": (+value / max) * 100 + '%'} as React.CSSProperties : {display: 'none'};
    return (
        <tr>
            <td className='category'>{ catergory }</td>
            <td className="stats-number">{ value }</td>
            
            {
                (max && max !== 0) &&
                <td className="range-slide">
                    <div className="range-slide-fill" style={style}></div>
                </td>
            }
        </tr>
    );
};

export default DataRow;