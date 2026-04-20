import { useMemo } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#c47c2a', '#4a7c59', '#9b4444', '#4a7aaa', '#8b6baa', '#4a8a7a', '#b07a3a'];

function SpendingChart({ transactions }) {
  const data = useMemo(() => {
    const byCategory = transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});
    return Object.entries(byCategory).map(([name, value]) => ({ name, value }));
  }, [transactions]);

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2ddd6" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#7a6f66', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#7a6f66', fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, 'Spending']}
            contentStyle={{
              background: '#fefefe',
              border: '1px solid #e2ddd6',
              borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              boxShadow: '0 8px 24px rgba(45,41,38,0.1)',
            }}
            itemStyle={{
              color: '#7a6f66',
            }}
            labelStyle={{ color: '#7a6f66', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}
            cursor={{ fill: 'rgba(107,124,78,0.05)' }}
          />
          <Bar dataKey="value" name="Spending" radius={[5, 5, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} opacity={0.9} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpendingChart;
