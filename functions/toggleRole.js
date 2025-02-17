/**
 * Переключение роли участнику.
 *
 * @param {Role}                role   Роль
 * @param {GuildMember|Number}  member Объект или ID пользователя
 * @param {Author}              author Объект автора вызова функции
 */
module.exports = (role, member, author) => {
	if(!(member instanceof Discord.GuildMember))
		member = guild.members.cache.get(member);

	if(!member) return [false, 'Пользователь не найден'];
	
	const action = member.roles.cache.has(role.id)
		? { val : 'remove', text : 'убрана у' }
		: { val : 'add', text : 'выдана' };

	member.roles[action.val](role, 'По требованию ' + member2name(author, 1));

	return [true, 'Роль <@&' + role.id + '> ' + action.text + ' <@' + member.id + '>'];
};
