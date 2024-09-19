// // src/components/BalanceContainer.tsx
// import React, { useEffect, useState } from 'react';
// import BalanceCard from '../balancecard/BalanceCard';
// import { fetchBalance } from '../../api/balanceApi';
//
// const BalanceContainer: React.FC = () => {
//     const [balance, setBalance] = useState<number | null>(null);
//
//     useEffect(() => {
//         const getBalance = async () => {
//             const balance = await fetchBalance();
//             setBalance(balance);
//         };
//
//         getBalance();
//     }, []);
//
//     const handleRechargeClick = () => {
//         // Lógica para recarregar o saldo
//     };
//
//     return (
//         <BalanceCard balance={balance ?? 0} onRechargeClick={handleRechargeClick} />
//     );
// };
//
// export default BalanceContainer;