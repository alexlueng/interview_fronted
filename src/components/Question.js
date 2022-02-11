import React from 'react';

const Question = ( { question } ) => {
  return <>
            <tr tabIndex="0" className="focus:outline-none">
                <td>
                    <div className="flex items-center">
                        <div className="bg-gray-100 rounded-sm p-2.5">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/list5-svg1.svg" alt="apple" />
                        </div>
                        <div className="pl-3">
                            <div className="flex items-center text-sm leading-none">
                                <p className="font-semibold text-gray-800">{question.quest}</p>
                                {/* <p className="text-indigo-700 ml-3">(ID 879-10-940)</p> */}
                            </div>
                            <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                        </div>
                    </div>
                </td>
                <td className="pl-16">
                    <div>
                        <p className="text-sm font-semibold leading-none text-right text-gray-800">$2200</p>
                        <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                            <p className="text-xs leading-3 text-green-700">Shipped</p>
                        </div>
                    </div>
                </td>
    </tr>

  </>
};

export default Question;
