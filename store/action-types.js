// I could do something like ['CONST_1', 'CONST_2'...'CONST_10'].reduce((acc,cur)=> (acc[cur]=cur, acc), {})
// to save some keystrokes but I prefer to use autocomplete (indeed I wrote on the console then copied and pasted here)
export default {
  'FETCH_MYLOCATION': 'FETCH_MYLOCATION',
  'STORE_MYLOCATION': 'STORE_MYLOCATION',
  'RESET_MYLOCATION': 'RESET_MYLOCATION',
  'FAIL_MYLOCATION': 'FAIL_MYLOCATION',
  'FETCH_HOSTNAMELOCATION': 'FETCH_HOSTNAMELOCATION',
  'STORE_HOSTNAMELOCATION': 'STORE_HOSTNAMELOCATION',
  'FAIL_HOSTNAMELOCATION': 'FAIL_HOSTNAMELOCATION'
}
