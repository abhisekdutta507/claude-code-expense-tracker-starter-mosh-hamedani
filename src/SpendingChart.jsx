import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#0ea5e9', '#059669', '#f59e0b', '#7c3aed', '#ec4899', '#06b6d4', '#dc2626'];

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
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#64748b', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `$${v}`}
            tick={{ fontSize: 11, fill: '#64748b', fontFamily: 'JetBrains Mono, monospace' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip
            formatter={(value) => [`$${value.toFixed(2)}`, 'Spending']}
            contentStyle={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontFamily: 'Syne, sans-serif',
              fontSize: 13,
              boxShadow: '0 8px 24px rgba(30,45,61,0.10)',
            }}
            itemStyle={{
              color: '#64748b',
            }}
            labelStyle={{ color: '#1e2d3d', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}
            cursor={{ fill: 'rgba(14,165,233,0.04)' }}
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
