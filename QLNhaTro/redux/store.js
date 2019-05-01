import {createStore,combineReducers} from 'redux';
// const defaultState={
//     arrWords : [
//       { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: true },
//       { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
//       { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
//       { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
//       { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
//       { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
//       { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
//       { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
//       { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
//       { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
//       { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
//       { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
//       { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
//       { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
//   ],
//     filterStatus:"SHOW_ALL",
//     isAdding:false
//   };
const defaultArrayWord= [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
];
  // const reducer=(state=defaultState,action)=>{
  //   switch (action.type) {
  //     case 'FILTER_SHOW_ALL':
  //       return {...state,filterStatus:'SHOW_ALL'};
  //       break;
  //       case 'FILTER_MEMORIZED':
  //       return {...state,filterStatus:'MEMORIZED'};
  //       break;
  //       case 'FILTER_NEED_PRACTICE':
  //       return {...state,filterStatus:'NEED_PRACTICE'};
  //       break;
  //       case 'TOGGLE_MEMORIZED' : return {
  //         ...state,
  //         arrWords:state.arrWords.map(e=>{
  //           if(e.id !== action.id) return e;
  //           return {...e,memorized:!e.memorized};
  //         })
  //       };
  //       break;
  //       case 'TOGGLE_SHOWWORD' : return {
  //         ...state,
  //         arrWords:state.arrWords.map(e=>{
  //           if(e.id !== action.id) return e;
  //           return {...e,isShow:!e.isShow};
  //         })
  //       };
  //       break;
  //       case 'TOGGLE_ISADDING' : return {
  //         ...state,
  //        isAdding:!state.isAdding
  //       };
  //       break;
  //       case 'ADD_WORD' :return {
  //         ...state,
  //         arrWords:[{
  //           id: state.arrWords.length +1,
  //           en:action.en,
  //           vn:action.vn,
  //           memorized:false,
  //           isShow:false
  //         }].concat(state.arrWords)
  //         //arrWords: state.arrWords.concat({
  //          // id: state.arrWords.length +1,
  //          // en:action.en,
  //         //  vn:action.vn,
  //         //  memorized:false,
  //          // isShow:false
  //        // })
  //        // thêm ở phía dưới
  //       };
  //     default:
  //       break;
  //   }
  //   return state;
  // };
  const isAddingReducer = (state = false,action) =>{
    switch(action.type){
      case 'TOGGLE_ISADDING': return !state;
      default:
      return state;
    }
    
    
  };
  const filterStatusReducer = (state = 'SHOW_ALL',action) =>{
    switch(action.type){
      case 'FILTER_SHOW_ALL': return 'SHOW_ALL';
      case 'FILTER_MEMORIZED': return 'MEMORIZED';
      case 'FILTER_NEED_PRACTICE': return 'NEED_PRACTICE';
      default:
      return state;
    }
  };
  const arrWordsReducer = (state =defaultArrayWord, action)=>{
    switch(action.type){
      case 'TOGGLE_MEMORIZED': return state.map(e=>{
        if(e.id !==action.id) return e;
        return {...e,memorized:!e.memorized};
      });
      case 'TOGGLE_SHOWWORD': return state.map(e=>{
        if(e.id !==action.id) return e;
        return {...e,isShow:!e.isShow};
      });
      case 'ADD_WORD': return [{
        id:state.length + 1,
        en:action.en,
        vn:action.vn,
        memorized:false,
        isShow:false
      }].concat(state);
      default:
      return state;
    }
    
  };
  const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer
  });
  const store=createStore(reducer);
  export default store;