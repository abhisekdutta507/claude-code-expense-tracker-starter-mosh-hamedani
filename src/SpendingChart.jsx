import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#c47c2a', '#1a7a4a', '#c13030', '#2e6da4', '#8b5e8c', '#2a8a7a', '#d4834a'];

function SpendingChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  const data = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2dbd0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#7a6858', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#7a6858', fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, 'Spending']}
            contentStyle={{
              background: '#ffffff',
              border: '1px solid #e2dbd0',
              borderRadius: '8px',
              fontFamily: 'Syne, sans-serif',
              fontSize: 13,
              boxShadow: '0 8px 24px rgba(26,18,8,0.12)',
            }}
            itemStyle={{
              color: '#7a6858',
            }}
            labelStyle={{ color: '#7a6858', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}
            cursor={{ fill: 'rgba(26,18,8,0.03)' }}
          />
          <Bar dataKey="value" name="Spending" radius={[5, 5, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} opacity={0.9} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
