SELECT helo_posts id AS post_id, title, content, img, profile_pic, date_created, helo_posts username AS author_username
join helo_users u on u.id = p.author_id
where lower(title) like $1
order by date_created asc;