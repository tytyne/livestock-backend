// This is assuming you have 2 different types of transaction like incoming money and outgoing money
// so it will retun two sums separately

allRangeTransactionsCount(options = {}) 
    try {
      const requests = await sequelize.query(
          `SELECT 
            COUNT(*) AS total_cnt,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'inMoney'),0) AS intotal,
            COALESCE(SUM("transaction_total") FILTER (WHERE "type" = 'outMoney'),0)  AS outtotal
        FROM "MoneyTransactions"
        WHERE (user_id = :user_id AND "createdAt"::date BETWEEN :fromdate AND :todate);`, // Fetching by range is only at here at WHERE part
        {
          replacements:
          {
            fromdate: options.fromdate,
            todate: options.todate,
            user_id: options.user_id,
            product_id: options.product_id
          }
        }
      );
      return requests;
    } catch (error) {
      throw new Error(error);
    }
  