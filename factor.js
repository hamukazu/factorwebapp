
function factor(n) {
  if (n<=0 || n!=Math.floor(n))
    return [];
  ret=[];
  i=2;
  m=n
  while (i<=n) {
    while (m%i==0) {
      m/=i
      ret.push(i)
    }
    if (m==1)
      break;
    i++;
  }
  if (m!=1) {
    ret.push(m)
  }
  return ret;
}
